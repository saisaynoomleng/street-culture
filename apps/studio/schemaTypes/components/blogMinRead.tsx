import {NumberInputProps} from 'sanity'

export const blogMinRead = (props: NumberInputProps) => {
  return (
    <div>
      {props.renderDefault(props)}
      {props.value && typeof props.value == 'number' && (
        <p style={{fontSize: '12px'}}>This blog this {props.value} mins to read</p>
      )}
    </div>
  )
}
