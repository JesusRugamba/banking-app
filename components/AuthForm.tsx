"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "./CustomFormField";

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      postalCode: "",
      ssn: "",
      dateOfBirth: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        // Sign Up with Appwrite & create plaid token
      setIsLoading(true);
      if(type === 'sign-up'){

      }
      if(type === 'sign-in'){
        
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    console.log(values);
  };
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href={"/"} className="flex cursor-pointer items-center gap-1">
          <Image
            src={"/icons/logo.svg"}
            width={34}
            height={34}
            alt="inoti-logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Inoti
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Log In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomFormField
                      control={form.control}
                      label="First Name"
                      name="firstName"
                      placeholder="ex: John"
                    />
                    <CustomFormField
                      control={form.control}
                      label="Last Name"
                      name="lastName"
                      placeholder="ex: Doe"
                    />
                  </div>

                  <CustomFormField
                    control={form.control}
                    label="Address"
                    name="address"
                    placeholder="Enter your specific address"
                  />
                  <div className="flex gap-4">
                    {" "}
                    <CustomFormField
                      control={form.control}
                      label="State"
                      name="state"
                      placeholder="ex: KIGALI"
                    />
                    <CustomFormField
                      control={form.control}
                      label="Postal Code"
                      name="postalCode"
                      placeholder="ex: 11101"
                    />
                  </div>

                  <div className="flex gap-4">
                    {" "}
                    <CustomFormField
                      control={form.control}
                      label="Date of Birth"
                      name="dateOfBirth"
                      placeholder="yyyy-mm-dd"
                    />
                    <CustomFormField
                      control={form.control}
                      label="SSN"
                      name="ssn"
                      placeholder="ex: 1234"
                    />
                  </div>
                </>
              )}
              <CustomFormField
                control={form.control}
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <CustomFormField
                control={form.control}
                label="Password"
                name="password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" /> &nbsp; Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link">
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
