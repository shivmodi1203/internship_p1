import { TextField } from '@mui/material'

function Input(props) {
    const {id,label,variant} = props;
  return (
    <>
        <div className="text-field">
            <TextField id={id} label={label} variant={variant}/>
        </div>
        {/* <TextField id={id} label={label} variant={variant} />
        <TextField id={id} label={label} variant={variant} /> */}
    </>
  )
}

export default Input