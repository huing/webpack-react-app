// 文章链接地址
// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
// @ts-ignore
interface TodoPartial {
  title: string
  description: string
}
function updateTodo(todo: TodoPartial, fieldsToUpdate: Partial<TodoPartial>) {
  return { ...todo, ...fieldsToUpdate }
}
const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}
const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
})

interface PropsRequired {
  a?: number
  b?: string
}
const obj: PropsRequired = { a: 5 }
// const obj2: Required<PropsRequired> = { a: 5 };

interface TodoReadonly {
  title: string
}
const todo4: Readonly<TodoReadonly> = {
  title: 'Delete inactive users',
}
// todo4.title = "Hello";

interface CatInfoRecord {
  age: number
  breed: string
}
type CatNameRecord = 'miffy' | 'boris' | 'mordred'
const cats: Record<CatNameRecord, CatInfoRecord> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}

interface TodoPick {
  title: string
  description: string
  completed: boolean
}
type TodoPreviewPick = Pick<TodoPick, 'title' | 'completed'>
const todo3: TodoPreviewPick = {
  title: 'Clean room',
  completed: false,
}

interface TodoOmit {
  title: string
  description: string
  completed: boolean
  createdAt: number
}
type TodoPreviewOmit = Omit<TodoOmit, 'description'>
const todo5: TodoPreviewOmit = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
}
type TodoInfoOmit = Omit<TodoOmit, 'completed' | 'createdAt'>
const todoInfo: TodoInfoOmit = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
}

type aT0 = Exclude<'a' | 'b' | 'c', 'a'>
type aT1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
type aT2 = Exclude<string | number | (() => void), Function>

type bT0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>
type bT1 = Extract<string | number | (() => void), Function>

type cT0 = NonNullable<string | number | undefined>
type cT1 = NonNullable<string[] | null | undefined>
