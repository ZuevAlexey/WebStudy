import './container.css';
import {Container} from '../../guideline/container';
import {InputText} from '../../guideline/input-text';
import {Button} from '../../guideline/button';
import {Table} from '../../guideline/table';
import {PageContent} from '../page-content';

let tableData = [
  ['40%', '50%', '23%', '95%'],
  ['146%', '230%', '223%', '95%']
];

let headers = {
    rowHeaders : ['Услуга 1', 'Услуга 2'],
    columnHeaders : ['','I кв.','II кв.','III кв.','IV кв.']
};

const code = 'let tableData = [\n' +
    '  [\'40%\', \'50%\', \'23%\', \'95%\'],\n' +
    '  [\'146%\', \'230%\', \'223%\', \'95%\']\n' +
    '];\n' +
    '\n' +
    'let headers = {\n' +
    '    rowHeaders : [\'Услуга 1\', \'Услуга 2\'],\n' +
    '    columnHeaders : [\'\',\'I кв.\',\'II кв.\',\'III кв.\',\'IV кв.\']\n' +
    '};\n\n'
+'let containerData = [\n' +
    '    <InputText key = {1} caption=\'Введите название проекта:\' placeholder=\'ваш проект\' />,\n' +
    '    <Button key = {2} text=\'Сгенерировать отчет\' className=\'teal\' />,\n' +
    '    <Table key = {3} caption=\'Заголовок отчета\' data={tableData} headers={headers} className=\'t-example\'/>\n' +
    '];\n\n'+
    '<Container className=\'visible\' content = {containerData}/>';

export const ContainerPage = (props) => {
    return (<PageContent
        caption= {'Container'}
        code = {code} >
        <Container key = {1} className='visible' >
            <InputText caption='Введите название проекта:' placeholder='ваш проект' />
            <Button text='Сгенерировать отчет' className='teal' />
            <Table caption='Заголовок отчета' data={tableData} headers={headers} className='t-example'/>
        </Container>
    </PageContent>);
};