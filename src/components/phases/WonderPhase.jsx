export default function WonderPhase({ onNext }) {
  return (
    <div className="wonder-phase">
      <div className="wonder-card">
        <span className="wonder-emoji">🤔</span>
        <h2 className="wonder-title">Here's Something to Wonder About…</h2>
        <p className="wonder-text">
          Emma was collecting stickers. She had <strong>23 animal stickers</strong> and
          then got <strong>14 space stickers</strong> as a birthday gift.
        </p>

        <div className="wonder-problem-box">
          <p>
            Emma wants to put ALL her stickers into one album.
            She needs to know: <strong>how many stickers does she have altogether?</strong>
          </p>
          <span className="wonder-question-highlight">
            🤩 23 + 14 = ???
          </span>
        </div>

        <p className="wonder-text">
          Hmm… We have two <em>two-digit</em> numbers. How can we add them without getting confused?
          Do we need to "carry" anything? Or is there an easier way?
        </p>

        <div className="wonder-mascot-row">
          <div className="mascot-avatar">🐻</div>
          <div className="mascot-bubble">
            Ooh! I wonder if we can split them into tens and ones… 🧠
          </div>
        </div>
      </div>

      <button className="wonder-btn" onClick={onNext}>
        Let's Find Out! →
      </button>
    </div>
  );
}
