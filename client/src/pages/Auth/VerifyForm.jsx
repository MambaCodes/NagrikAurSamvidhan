import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { Link } from "react-router-dom"

export function VerifyForm() {
    return (
        <Card className="mx-auto my-24 max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Account Verification</CardTitle>
                <CardDescription>
                    Enter the OTP sent on your email below to verify your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="flex justify-center items-center flex-wrap">
                            <InputOTP maxLength={6}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                        <Button type="submit" className="w-full mt-6">
                            Verify
                        </Button>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    Didn&apos;t receive an OTP?{" "}
                    <Link to="/verification-one-time-password" className="underline">
                        Resend OTP
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}