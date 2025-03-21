import { z } from "zod"

const registerSchema = z.object({
  firstName: z.string().min(1, "Ім'я обов'язкове"),
  lastName: z.string().min(1, "Прізвище обов'язкове"),
  email: z.string().email("Невірний формат email"),
})

export async function registerUser(formData: FormData) {
  // Validate fields with Zod
  const validatedFields = registerSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Помилка валідації. Будь ласка, перевірте введені дані.",
      success: false,
    }
  }

  const { firstName, lastName, email } = validatedFields.data

  try {
    const response = await fetch("https://api.omnisend.com/v5/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "67965b75454bc11db967470c-Cpykwzs827TwSAKG3gFm3E2bjq1SL2LyYDbCBDAkzCeXDwUNRX",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        channels: {
          email: {
            status: "subscribed",
            statusDate: new Date().toISOString(),
          },
        },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to register user with Omnisend")
    }

    return {
      success: true,
      message: "Реєстрація успішна!",
      errors: {},
    }
  } catch (error) {
    console.error("Error registering user:", error)
    return {
      success: false,
      message: "Помилка при реєстрації. Спробуйте ще раз.",
      errors: {},
    }
  }
}
