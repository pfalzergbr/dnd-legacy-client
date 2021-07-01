export interface AbilityMethodsProps {}

const AbilityMethods: React.FC<AbilityMethodsProps> = () => {
  return (
    <div>
      <h3>Choose Methods</h3>
      <div>
        <button>
          <h4>Point Buy</h4>
          <p>
            Distribute a set number of points to your liking across abilities
          </p>
        </button>
        <button>
          <h4>Roll 4d6, drop the lowest</h4>
          <p>
            The classic way of rolling your points.
          </p>
        </button>
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default AbilityMethods;
