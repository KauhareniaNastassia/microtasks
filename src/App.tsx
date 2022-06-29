import React, {useState} from 'react';
import './App.css';
import {Header} from "./microtask1/Header";
import {Body} from "./microtask1/Body";
import {Footer} from "./microtask1/Footer";
import {NewComponent} from "./microtask2/NewComponent";
import {TopCars} from "./microtask2/TopCars";
import {Button} from "./microtask3/Button";
import {FilterButton} from "./microtask5/FilterButton";
import {FullInput} from "./microtask6/FullInput";
import {Input} from "./microtask6/Input";
import {ButtonForInput} from "./microtask6/ButtonForInput";


const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Tomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 108},
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

export type FilterType = 'All' |'Dollars' | 'Rubles'

function App() {

    /*const myFirstSubscriber = (event:MouseEvent) => {
        console.log('Hello, Im Vasya!')
    }

    const MySecondSubscriber = () => {
        console.log('Hello, Im Ivan!')
    }*/
    /*const onClickHandler = (name: string) => {
        console.log(name)
    }
    const foo1 = () => {
        console.log (100500)
    }
    const foo2 = (num: number) => {
        console.log('num')
    }*/

    //3я таска
    const Button1Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }


//4я таска
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler1 = () => {
        setA(0)
        console.log(a)
    }


    //5я таска

    const [money, setMoney] = useState([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'Rubles', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'Rubles', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'Rubles', value: 50, number: ' v1234567890'},
    ])


    //6я таска

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('')

 const addMessage = (title: string) => {
        let newMessage = {message: title}
     setMessage([newMessage, ...message])

    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <div>
                <Header title={'New Body'}/>
                <Body titleForBody={'New Body'}/>
                <Footer titleForFooter={'New Footer'}/>
                <NewComponent students={students}/>
                <TopCars topCars={topCars}/>

                <Button name={'MyYouTubeChannel1'} callBack={() => Button1Foo('Im Ivan')}/>
                <Button name={'MyYouTubeChannel1'} callBack={() => Button2Foo('Im Vasya')}/>

                <div>
                    <h1>{a}</h1>
                    <button onClick={onClickHandler}>number</button>
                    <button onClick={onClickHandler1}>0</button>
                </div>

                <FilterButton currentMoney={money}/>
            </div>

                <Input setTitle={setTitle} title={title} />
                <ButtonForInput name={'+'} callback={callBackButtonHandler} />

            {/*<FullInput addMessage={addMessage} />*/}
            {message.map((el, index) => {
                return(
                    <div key={index}>{el.message}</div>
                )
            })}


        </div>


    );
}

export default App;
