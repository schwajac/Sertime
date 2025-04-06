//imports
import Navbar from '../../components/navbar'; 
import RegistrationForm from '../../components/registrationForm';
import LeftImage from '../../components/leftImage';


function RegisterPage() {

    return (
        <div className="h-screen flex flex-col">

            <Navbar />

            <div className="flex flex-grow">

                <LeftImage/>
                <RegistrationForm/>

            </div>

        </div>
    );
}

export default RegisterPage;
