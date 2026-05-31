/**
 * Narration module — maps phases to audio segments.
 * Each segment has `text` (spoken aloud) and `style`.
 * Text MUST match exactly what's shown on screen (1:1 parity).
 */

const say      = (text) => ({ text, style: 'statement' });
const ask      = (text) => ({ text, style: 'question' });
const cheer    = (text) => ({ text, style: 'encouragement' });
const emphasize= (text) => ({ text, style: 'emphasis' });
const think    = (text) => ({ text, style: 'thinking' });
const celebrate= (text) => ({ text, style: 'celebration' });

export function introNarration() {
  return [
    say("Ready to add numbers? Let's go!"),
    say('Join Ethan on a journey to master addition within 100!'),
  ];
}

export function wonderNarration() {
  return [
    think("Here's something to wonder about…"),
    say('Emma had 23 animal stickers and 14 space stickers. How many stickers altogether?'),
    ask('23 + 14 = ???'),
    think('Ooh! I wonder if we can split them into tens and ones…'),
  ];
}

export function storyNarration(panelIndex) {
  const panels = [
    [say('Ethan loves maths!'), say('His teacher Ms Parker announced a trip to Pasar Malam!')],
    [say('At Pasar Malam, the fruit seller had 23 mangoes and 14 rambutans.'), ask('How many fruits altogether?')],
    [emphasize('Add the TENS first, then add the ONES!'), say('Tens: 20 + 10 = 30. Ones: 3 + 4 = 7. Total: 37!')],
    [celebrate('23 plus 14 equals 37!'), celebrate('37 fruits! Ethan shouted proudly.')],
  ];
  return panels[panelIndex] ?? [];
}

export function simulateNarration(stationIndex) {
  const stations = [
    [say('Use tens and ones blocks to build the total!')],
    [say('Use the place value chart to add the numbers.')],
    [say('Add using the column method. Ones first, then tens!')],
  ];
  return stations[stationIndex] ?? [];
}

export function feedbackNarration(correct) {
  if (correct) return [celebrate('Correct! Great job!')];
  return [cheer('Not quite! Try again.')];
}

export function reflectNarration() {
  return [
    cheer("Amazing work! Here's what you achieved today."),
    emphasize('When adding without regrouping, add the ones first, then the tens!'),
  ];
}
