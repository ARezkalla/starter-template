import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Box, Button, CircularProgress, TextField, Theme } from "@mui/material"
import ShowPasswordIcon from "../ShowPasswordIcon"
import { styles } from "./styles"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "@store/hooks"
import { setThemeType, setUserIsLogged } from "@store/rootSlice"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLoginValidationMutation } from "./loginSlice"

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

  const [loginValidation, { isLoading, isError }] = useLoginValidationMutation({
    selectFromResult: ({ data, isLoading, isError }) => ({
      data: data,
      isLoading: isLoading,
      isError: isError,
    }),
  })


  const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("themeMode")
  return theme ? theme : "light"
  }

  const handleOnLogin = async (data: { email: string; password: string }) => {
    if (!isValid) return
    try {
      const result = await loginValidation({
        email: data.email,
        password: data.password,
      }).unwrap()
      const { user } = result.data
      console.log("user", user)
      dispatch(setThemeType(getThemeFromLocalStorage()))
      dispatch(setUserIsLogged(true))
      navigate("/dashboard")
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
          {isLoading ? (
            <CircularProgress
              size={20}
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            />
          ) : (
            "Login"
          )}
        </Button>
      </Box>
    </form>
  )
}

export default LoginForm
