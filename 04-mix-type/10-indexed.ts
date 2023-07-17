export {}

interface IDataModel {
    id: string
    title: string
    elements: {
        header: {
            title:string
            description:string
            links: string[]
        }
        footer: {
            title: string
            links: string[]
        }
        body:[
            {
                title:string
                content:{}
            }
        ]
    }
}

// утиліта дозволяє нам отримати тип за індексом 

type T0 = IDataModel['elements']['header']['title']

// у випадку з кортежами за індексом ми можемо отримати тип елемента в кортежі

type SomeTuple = [number, string, boolean, ...string[]]

const arr:SomeTuple = [1, 'abc', true, '', '', '']

type T1 = SomeTuple[5]

