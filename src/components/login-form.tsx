"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { useActionState } from "react";
import { login, signup, LoginState, SignUpState} from "@/app/(auth)/login/actions";
import {Button} from "@/components/ui/button";
import {AlertCircle, Loader, MailOpen} from "lucide-react";
import {redirect} from "next/navigation";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

export default function LoginForm() {
    const [state, formAction, pending] = useActionState<LoginState, FormData>( login,  {
        success: null,
        message: ""
    });

    const [stateSingUp, formActionSingUp, pendingSingUp ] = useActionState<SignUpState, FormData>( signup, {
        success: null,
        message: ""
    })

    return (
        <Card className={"mx-auto max-w-lg sm:max-w-md md:max-w-sm lg:w-1/2 max-sm:w-full"}>
            <CardHeader>
                <CardTitle className={"text-1xl text-center"}>
                    MModas
                </CardTitle>
                <CardTitle className={"text-2xl"}>
                    Login
                </CardTitle>
                <CardContent className={"p-0"}>
                    <form action={formAction}>
                        <div className={"grid gap-4 p-0 pt-1.5"}>
                            <div className={"grid gap-2 p-0"}>
                                <Label htmlFor={"email"}>
                                    Email
                                </Label>
                                <Input
                                    id={"email"}
                                    type={"email"}
                                    name={"email"}
                                    placeholder={"someone@example.com"}
                                    required={true}
                                />
                            </div>

                            <div className={"grid gap-2 p-0"}>
                                <Label htmlFor={"password"}>
                                    Password
                                </Label>
                                <Input
                                    id={"password"}
                                    type={"password"}
                                    name={"password"}
                                    placeholder={"password"}
                                    required={true}
                                />
                            </div>

                            {state.success === true && (
                                redirect('/app')
                            )}

                            {state.success === false && (state.message === 'invalid_credentials' || state.message === 'email_not_confirmed') && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Erro</AlertTitle>
                                    <AlertDescription>
                                        Por favor verifique se seu email ou senha está correto! Se não confirmou seu email, por favor verifique seu inbox.
                                    </AlertDescription>
                                </Alert>
                            )}

                            {state.success === false && state.message !== 'invalid_credentials' && (
                                redirect("/error")
                            )}

                            <Button
                                type={"submit"}
                                className={"w-full bg-purple-700"}
                                formAction={formAction}>
                                Login
                                {pending && <Loader className={"animate-spin"}/>}
                            </Button>

                            {stateSingUp.success === true && (
                                <Alert className={"text-muted-foreground"}>
                                    <MailOpen className="h-4 w-4 !text-green-600" />
                                    <AlertTitle className="text-gray-900">
                                        Email de confirmação enviado!
                                    </AlertTitle>
                                    <AlertDescription>
                                        Confira seu inbox para confirmar seu de login.
                                    </AlertDescription>
                                </Alert>
                            )}

                            {stateSingUp.success === false && (
                                redirect("/error")
                            )}

                            <Button
                                type={"submit"}
                                variant="outline"
                                className={"w-full "}
                                formAction={formActionSingUp}>
                                Sign Up
                                {pendingSingUp && <Loader className={"animate-spin"}/>}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </CardHeader>
        </Card>
    )
}