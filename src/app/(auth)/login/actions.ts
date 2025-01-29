'use server'

import { createClient } from '@/utils/supabase/server'

export type LoginState = {
    success: null | boolean,
    message?: string,
}

export type SignUpState = {
    success: null | boolean,
    message?: string,
}

export async function login(previousState: LoginState, formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        return {
            success: false,
            message: error.code
        }
    }

    return {
        success: true
    }
}

export async function signup(previousState: SignUpState ,formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        return {
            success: false,
            message: error.code
        }
    }

    return {
        success: true
    }
}