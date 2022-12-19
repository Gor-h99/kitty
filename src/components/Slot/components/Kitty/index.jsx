import "./Kitty.scss";

const spinClasses = ['kitty_spin_row_one', 'kitty_spin_row_two', 'kitty_spin_row_three', 'kitty_spin_row_four', 'kitty_spin_row_five'];

const Kitty = ({ item, spin, idx }) => {

  const handleAnimation = (classes, index) => {
    if(spin) {
      return classes[index] || '';
    }
  };

  return (
    <div className='kitty'>
      <img
        className={`${handleAnimation(spinClasses, idx)}`}
        src={`https://www.solkitties.net/assets/slots/kitties/${item}.png`}
      />
    </div>
  );
}

export default Kitty;
