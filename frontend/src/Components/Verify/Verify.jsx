import { useContext, useEffect } from 'react';
import './Verify.css';
import { CompanyContext } from '../../CompanyContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function Verify(){

    const {url} = useContext(CompanyContext);
    const [searchParams] = useSearchParams();
    const success = searchParams.get('success');
    const bookingId = searchParams.get('bookingId');
    const navigate = useNavigate();

    useEffect(() => {
  if (!success || !bookingId) {
    toast.error("Invalid payment verification data.");
    return navigate("/");
  }

  if (success === "false") {
    toast.error("Payment failed or canceled.");
    return navigate("/");
  }

  async function paymentVerification() {
    try {
      const response = await axios.post(`${url}/api/booking/verify-payment`, {
        success,
        bookingId,
      });

      if (response?.data?.success) {
        toast.success("Payment verified!");
        navigate("/my-booking");
      } else {
        toast.error("Payment failed.");
        navigate("/");
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      toast.error("Something went wrong during payment verification.");
      navigate("/");
    }
  }

  paymentVerification();
}, [success, bookingId, navigate]);

    return(
       <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
    )
}
export default Verify;