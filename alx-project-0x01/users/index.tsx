import React from 'react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";


const Users:React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-4">
                <h1 className="text-xl font-semibold mb-4">Users Page</h1>
                <Button title="Add User" />
            </main>
            <Footer />
        </div>
    );
};

export default Users;


// interface ButtonProps {
//     title: string;
//     styles?: string;
// }

// const Button: React.FC<ButtonProps> = ({ title, styles }) => {
//     return (
//         <button className={ styles ? styles : "bg-blue-500 text-white px-4 py-2 rounded"}>
//             {title}
//         </button>
//     );
// };

// export default Button;
