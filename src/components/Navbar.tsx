import {Button, ButtonEnum} from 'ui-design-system';
import "ui-design-system/dist/ui-design-system.css";


function Navbar() {

    const handleClick = () => {
        console.log('I was clicked!');
    };

    return <div className='Navbar'>
        <Button variant={ButtonEnum.Primary} clickHandler={handleClick}>Primary Button</Button>
        <Button variant={ButtonEnum.Secondary} disabled={true} clickHandler={handleClick}>Primary Button</Button>
        <Button variant={ButtonEnum.Underline} loading={true} loader={{type: 'spinner', mainColor: 'blue', subColor: 'red', size: 20}} clickHandler={handleClick}>Primary Button</Button>
        <Button variant={ButtonEnum.Underline} loading={true} loader={{type: 'dots', size: 10, mainColor: 'red', subColor: 'yellow'}} clickHandler={handleClick}>Primary Button</Button>
    </div>
}

export default Navbar;