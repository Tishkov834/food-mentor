import { Link } from 'react-router-dom';

function StepOnePage() {
  return (
    <div>
      <h1>StepOnePage</h1>

      <Link to="/step-two">
        <button>next</button>
      </Link>
    </div>
  );
}

export default StepOnePage;
