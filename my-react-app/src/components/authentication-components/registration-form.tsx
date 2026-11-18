import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SignUp } from '@/api/auth-api';


type FormValues = {
  email: string,
  password: string
}

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})


export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  }) 

  const formSubmit = async (value: FormValues) => {
    const res = await SignUp(value)
    if(res.data) {
      console.log(res.data)
    }
  }

  return(
    <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col gap-2 my-4'>
      <Input {...register('email')} />
      {
        errors.email && <span>{errors.email?.message}</span>
      }
      <Input { ...register('password') } type='password' />
      {
        errors.password && <span>{errors.password?.message}</span>
      }
      <Button type='submit'>Register</Button>
    </form>
  )
}