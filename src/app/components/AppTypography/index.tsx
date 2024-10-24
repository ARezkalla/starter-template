import React from "react"
import { SxProps, Typography, TypographyProps } from "@mui/material"
import styles from "./styles"
export interface IAppTypography {
  capitalizeFirstLetter?: boolean
  children?: any
  testid?: string
  typographyProps?: TypographyProps
  extraProps?: any
  textTransform?: "capitalize" | "lowercase" | "uppercase"
  sx?: SxProps
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
}
const AppTypography = (params: IAppTypography) => {
  const {
    variant,
    children,
    capitalizeFirstLetter = false,
    textTransform = "capitalize",
    typographyProps,
    testid,
    extraProps,
    sx = {},
  } = params
  const classes = capitalizeFirstLetter ? styles : null
  const typographyStyles = `${classes?.text} `
  return (
    <Typography
      sx={[
        capitalizeFirstLetter && styles.text,
        sx,
        !capitalizeFirstLetter && { textTransform },
      ]}
      variant={variant}
      data-testid={testid}
      {...{ ...typographyProps, ...extraProps }}
      className={typographyStyles}
    >
      {children}
    </Typography>
  )
}
export default AppTypography
