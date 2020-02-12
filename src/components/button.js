import React from "react"
import { css, jsx } from "@emotion/core"
import tw from "tailwind.macro"

const color = "white"

const Button = () => (
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)

const tail = tw`
    bg-white
    rounded-lg
    no-underline
    text-black
    px-8
    py-4
    text-lg 
    
    hover:bg-blue-500 
`

const emotion = css`
  border: 2px solid red;
`

const TailwindButton = props => <a css={[tail, emotion]} {...props} />

export { TailwindButton }
export default Button
