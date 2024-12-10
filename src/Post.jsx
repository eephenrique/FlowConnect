/* eslint-disable react/prop-types */


export function Post(props) {
    return (
    <>
        <h1><strong>{props.author}</strong></h1>
        <p>{props.content}</p>
    </>
    )
}

