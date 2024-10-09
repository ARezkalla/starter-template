import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Box, Button, TextField, Theme } from "@mui/material"
import ShowPasswordIcon from "../ShowPasswordIcon"
import { styles } from "./styles"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "@/app/store/hooks"
import { setUserIsLogged } from "@/app/store/rootSlice"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

type FormData = {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    control,
    trigger: triggerValidation,
    handleSubmit,
    formState: { isValid },
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  })

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const handleOnLogin = async (data: { email: string; password: string }) => {
    if (!isValid) return
    try {
      //here goes the sign in
      dispatch(setUserIsLogged(true))
      navigate("dashboard")
    } catch (error) {
      if (error instanceof Error) {
        console.error(error)
      }
    }
  }

  const [showPassword, setShowPassword] = useState(false)
  const handleOnClickRevealPass = () => setShowPassword(!showPassword)
  return (
    <form
      name="form"
      onSubmit={handleSubmit((data) => {
        handleOnLogin(data)
      })}
      autoComplete="off"
    >
      <Box sx={styles.formContainer}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              onChange={(e) => {
                field.onChange(e)
                triggerValidation("email")
              }}
              onFocus={() => {
                triggerValidation("email")
              }}
              InputLabelProps={{ sx: styles.textFieldLabel }}
              InputProps={{
                sx: { root: styles.inputField },
              }}
              autoFocus={true}
              inputProps={{ "data-testid": "username" }}
              label="email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message && `${errors.email?.message}`}
              sx={styles.emailField}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              autoComplete="on"
              onInputCapture={(e) => {
                field.onChange(e)
                triggerValidation(field.name)
              }}
              InputLabelProps={{ sx: styles.textFieldLabel }}
              InputProps={{
                endAdornment: (
                  <ShowPasswordIcon
                    showPassword={showPassword}
                    onClick={handleOnClickRevealPass}
                  />
                ),
                sx: { root: styles.inputField },
              }}
              inputProps={{ "data-testid": "password" }}
              type={showPassword ? "text" : "password"}
              error={!!errors.password}
              helperText={
                errors.password?.message && `${errors.password?.message}`
              }
              label="password"
              style={{
                marginTop: "8px",
              }}
            />
          )}
        />

        <Button
          data-testid="loginButton"
          disabled={!isValid}
          sx={(theme: Theme) => styles.loginButton(theme)}
          type="submit"
          color="primary"
          variant="contained"
        >
          {"login"}
        </Button>
      </Box>
    </form>
  )
}

export default LoginForm
