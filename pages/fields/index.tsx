import { NextPage } from "next";
import Link from "next/link";

const Fields: NextPage = () => {
    return (
        <div className="container mt-5">
            <h2>View Fields Here</h2>
            <div className="row">
                <div className="col">
                    <Link href="/fields/createField">
                        <a className="btn btn-dark-outline">
                            Create Field1
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Fields