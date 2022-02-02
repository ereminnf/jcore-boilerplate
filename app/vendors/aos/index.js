import aos from 'aos';
import './index.scss';

if (window.aos === undefined) {
    window.aos = aos;
} else {
    console.log('aos already in use');
}