import { Link } from 'react-router-dom';

function StepTwoPage() {
  return (
    <div>
      <h1>StepTwoPage</h1>

      <Link to="/step-three">
        <button>next</button>
      </Link>
    </div>
  );
}

export default StepTwoPage;
