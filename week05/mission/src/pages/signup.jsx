import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const SignUpPage = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required('이메일은 필수 입력입니다'),
        password: yup.string().min(8, '비밀번호는 최소 8자 이상입니다.').max(16, '비밀번호는 최대 16자 이하입니다.').required(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'email'} {...register("email")} placeholder='이메일을 입력하세요'/>
            <p style={{color: 'red'}}>{errors.email?.message}</p>

            <input type={'password'} {...register("password")} placeholder='비밀번호를 입력하세요'/>
            <p style={{color: 'red'}}>{errors.password?.message}</p>

            <input type={'submit'}/>
        </form>
    );
};

export default SignUpPage;
