import React from 'react'
import { useVPNDetector } from 'react-vpn-detector';

const VpnDetector = () => {
    const { isUsingVPN, data, error } = useVPNDetector({
        apiUrl: 'https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY', // you can get it free from https://ipgeolocation.io/
    });

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {isUsingVPN ? (
                <p>VPN Detected: Your ISP appears to be a VPN or proxy.</p>
            ) : (
                <p>No VPN detected.</p>
            )}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default VpnDetector