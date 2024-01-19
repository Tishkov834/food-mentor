import { Link } from 'react-router-dom';

function StepThreePage() {
  return (
    <div>
      <h1>StepThreePage</h1>

      <Link to="/step-four">
        <button>next</button>
      </Link>
    </div>
  );
}

export default StepThreePage;
