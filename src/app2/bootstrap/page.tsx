const page = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            gap: '22px',
            marginTop: '32px',
            textAlign: 'center'
        }}>
            <button className="btn btn-success p-3">Test Button</button>

            <p className="alert alert-primary p-3 mt-4">Test Alert</p>
        </div>
    )
}

export default page