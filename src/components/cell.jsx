import clsx from 'clsx';
import { PlayerO } from './animO';
import { PlayerX } from './animX';

export function Cell({
  index,
  value,
  onClick,
  disabled = false,
  isWinning = false,
  extraClass = '',
}) {
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(index);
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      className={clsx(
        'cells flex',
        extraClass,
        disabled ? 'pointer-none' : 'cursor-pointer',
        isWinning && 'bg-green-200'
      )}
      onClick={() => {
        if (!disabled) onClick?.(index);
      }}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
    >
      {value === 'O' ? (
        <PlayerO key={`O-${index}-${value}`} />
      ) : value === 'X' ? (
        <PlayerX key={`X-${index}-${value}`} />
      ) : (
        value
      )}
    </div>
  );
}

export default Cell;
