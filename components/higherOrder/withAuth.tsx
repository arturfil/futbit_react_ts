import { useRouter } from "next/router"
import { Component, useEffect, useState } from "react";

function withAuth(Wrapped: any) {
    return (props:any) => {
        const router = useRouter();
        const [verified, setVerified] = useState(false);

        useEffect(function () {
                const accessToken = localStorage.getItem("jwt_futbit");
                if (!accessToken) {
                    router.push("/");
                } else {
                    setVerified(true);
                }
            }, []);

        if (verified) return <Wrapped {...props} />
        else return null;
    }
}

export default withAuth;