'use client'

const page = () => {
  return (
    <>
      <style jsx>{`
          .center {
            width: '100%';
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
          }
          h1 {
            color: green;
          }
          h2 {
            color: purple;
          }
          h3 {
            color: gray;
          }
          h4 {
            color: yellow;
          }
          h5 {
            color: blue;
          }
          h6 {
            color: red;
          }
          p {
            color: white;
          }
      `}
      </style>
      <div className="center">
        <h1>Test h1</h1>
        <h2>Test h2</h2>
        <h3>Test h3</h3>
        <h4>Test h4</h4>
        <h5>Test h5</h5>
        <h6>Test h6</h6>
        <p>Test P</p>
      </div>
    </>
  )
}

export default page