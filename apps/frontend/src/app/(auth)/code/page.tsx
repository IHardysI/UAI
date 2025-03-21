import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

export default function ResetCode() {
  return (
    <div className="flex flex-col items-center font-base">
      <h1 className="text-biggest font-bold mb-5">Введіть код</h1>
      <p className="font-light text-regular mb-[30px] max-w-[383px] text-center">
        Введіть код, який прийшов вам листом на пошту. Якщо код не прийшов –
        перевір спам.
      </p>
      <form className="w-full flex flex-col items-center gap-[35px]">
        <InputOTP maxLength={6}>
          <InputOTPGroup className='flex gap-[10px]'>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <Button className="font-light text-small text-cWhite" type="submit">
          Далі
        </Button>
      </form>
    </div>
  );
}
