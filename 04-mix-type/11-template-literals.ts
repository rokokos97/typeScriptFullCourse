export {}

type Side = 'top'|'bottom'|'right'|'left'

type Margin = `margin-${Side}`

// таким чином ми одразу отримуємо юніон з літералів

type Padding = `padding${'' | Capitalize<Side>}`

// отримаємо юніон з padding і всіх інших варіантів padding

type Direction = 'down'|'left'|'right'|'up'
type Position = 'top'|'bottom'
type Entry = 'in'|'out'

// як результат отримаємо набір літералів з усіма можливими іменами класів
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<''|Direction|Position>}`


