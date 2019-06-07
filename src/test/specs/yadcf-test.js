const assert = require('assert');

describe('yadcf test', () => {

    beforeEach(() => {
        /* IMPORTANT*/
        // use absolute path since relatiove is not supported
        browser.url('file:///ABSOLUTE_PATH/src/test/specs/test.html');
    });

    it('should have the right title - base init test', () => {
        const title = browser.getTitle();
        assert.equal(title, 'yadcf - Test');
    });

    const showAllInfo = "Showing 1 to 3 of 3 entries";
    const showNoneInfo = "Showing 0 to 0 of 0 entries (filtered from 3 total entries)";
    const showOneInfo = "Showing 1 to 1 of 1 entries (filtered from 3 total entries)";
    const showTwoInfo = "Showing 1 to 2 of 2 entries (filtered from 3 total entries)";

    describe('text filter', () => {

        it('input - no match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            inputElement.setValue('abc');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            // assert
            assert.equal(infoText, showNoneInfo);
        });

        it('input - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            inputElement.setValue('tiger');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=Tiger');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, 'Tiger');
            assert.equal(infoText, showOneInfo);
        });

        it('exclude - two match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            const excludeElement = $('#yadcf-filter-wrapper--example-0 input');
            inputElement.setValue('lion');
            excludeElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=Tiger');
            const tdText = filteredTd.getText();
            const filteredNullTd = $('td=null');
            const tdNullText = filteredNullTd.getText();
            // assert
            assert.equal(tdText, 'Tiger');
            assert.equal(tdNullText, 'null');
            assert.equal(infoText, showTwoInfo);
        });

        it('regex - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            const regexElement = $('.yadcf-regex-wrapper input');
            inputElement.setValue('\[A\-Z\]\\d+');
            regexElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=Lion1234');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, 'Lion1234');
            assert.equal(infoText, showOneInfo);
        });

        it('regex and exclude - two match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            const excludeElement = $('#yadcf-filter-wrapper--example-0 input');
            const regexElement = $('.yadcf-regex-wrapper input');
            inputElement.setValue('\\d+');
            excludeElement.click();
            regexElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=Tiger');
            const tdText = filteredTd.getText();
            const filteredNullTd = $('td=null');
            const tdNullText = filteredNullTd.getText();
            // assert
            assert.equal(tdText, 'Tiger');
            assert.equal(tdNullText, 'null');
            assert.equal(infoText, showTwoInfo);
        });

        it('null - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            const nullElement = $('.yadcf-null-wrapper input');
            inputElement.setValue('lion');
            nullElement.click();
            // get values
            const filteredNullTd = $('td=null');
            const tdNullText = filteredNullTd.getText();

            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            // assert
            assert.equal(tdNullText, 'null');
            assert.equal(infoText, showOneInfo);
        });

        it('null and exclude - two match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            const nullElement = $('.yadcf-null-wrapper input');
            const excludeElement = $('#yadcf-filter-wrapper--example-0 input');
            inputElement.setValue('lion');
            nullElement.click();
            excludeElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();

            const filteredTdTiger = $('td=Tiger');
            const tdTigerText = filteredTdTiger.getText();

            const filteredTdLion = $('td=Lion1234');
            const tdLionText = filteredTdLion.getText();

            // asset
            assert.equal(tdTigerText, 'Tiger');
            assert.equal(tdLionText, 'Lion1234');
            assert.equal(infoText, showTwoInfo);
        });

        it('clear - all match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            const nullElement = $('.yadcf-null-wrapper input');
            const excludeElement = $('#yadcf-filter-wrapper--example-0 input');
            const regexElement = $('.yadcf-regex-wrapper input');
            const clearElement = $('#yadcf-filter-wrapper--example-0 button');
            inputElement.setValue('lion');
            nullElement.click();
            excludeElement.click();
            regexElement.click();
            // act
            clearElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const nullChecked = nullElement.getProperty('checked');
            const regexChecked = regexElement.getProperty('checked');
            const excludeChecked = excludeElement.getProperty('checked');
            const inputText = inputElement.getValue();
            // asset
            assert.equal(nullChecked, false);
            assert.equal(regexChecked, false);
            assert.equal(excludeChecked, false);
            assert.equal(inputText, '');
            assert.equal(infoText, showAllInfo);
        });
    });

    describe('range number filter', () => {

        it('from - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-from-1');
            inputElement.setValue('3');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=4');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, '4');
            assert.equal(infoText, showOneInfo);
        });

        it('exclude from - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-from-1');
            const excludeElement = $('#yadcf-filter-wrapper--example-1 input');
            excludeElement.click();
            inputElement.setValue('3');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=0');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, '0');
            assert.equal(infoText, showOneInfo);
        });

        it('to - two match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-to-1');
            inputElement.setValue('5');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd4 = $('td=4');
            const td4Text = filteredTd4.getText();
            const filteredTd0 = $('td=0');
            const td0Text = filteredTd0.getText();
            // assert
            assert.equal(td4Text, '4');
            assert.equal(td0Text, '0');
            assert.equal(infoText, showTwoInfo);
        });

        it('exclude to - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-to-1');
            const excludeElement = $('#yadcf-filter-wrapper--example-1 input');
            excludeElement.click();
            inputElement.setValue('3');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=4');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, '4');
            assert.equal(infoText, showOneInfo);
        });

        it('from and to - single number - one match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            inputFromElement.setValue('0');
            inputToElement.setValue('0');

            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=0');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, '0');
            assert.equal(infoText, showOneInfo);
        });

        it('from and to - number range - one match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            inputFromElement.setValue('1');
            inputToElement.setValue('7');

            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=4');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, '4');
            assert.equal(infoText, showOneInfo);
        });

        it('from and to - number range - two match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            inputFromElement.setValue('-5');
            inputToElement.setValue('7');

            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd4= $('td=4');
            const td4Text = filteredTd4.getText();
            const filteredTd0 = $('td=0');
            const td0Text = filteredTd0.getText();
            // assert
            assert.equal(td4Text, '4');
            assert.equal(td0Text, '0');
            assert.equal(infoText, showTwoInfo);
        });

        it('from and to - number range - no match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            inputFromElement.setValue('400');
            inputToElement.setValue('700');

            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            // assert
            assert.equal(infoText, showNoneInfo);
        });

        it('from and to exclude - single number - one match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            const excludeElement = $('#yadcf-filter-wrapper--example-1 input');
            excludeElement.click();
            inputFromElement.setValue('0');
            inputToElement.setValue('0');

            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=4');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, '4');
            assert.equal(infoText, showOneInfo);
        });

        it('from and to exclude - number range - two match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            const excludeElement = $('#yadcf-filter-wrapper--example-1 input');
            excludeElement.click();
            inputFromElement.setValue('1');
            inputToElement.setValue('2');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd4 = $('td=4');
            const td4Text = filteredTd4.getText();
            const filteredTd0 = $('td=0');
            const td0Text = filteredTd0.getText();
            // assert
            assert.equal(td4Text, '4');
            assert.equal(td0Text, '0');
            assert.equal(infoText, showTwoInfo);
        });

        it('from and to exclude - number range - no match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            const excludeElement = $('#yadcf-filter-wrapper--example-1 input');
            excludeElement.click();
            inputFromElement.setValue('-1');
            inputToElement.setValue('5');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            // assert
            assert.equal(infoText, showNoneInfo);
        });

        it('from and to - from greater then to - no filter', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            inputFromElement.setValue('400');
            inputToElement.setValue('5');

            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            // assert
            assert.equal(infoText, showNoneInfo);
        });

        it('null - one match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const nullElement = $$('.yadcf-null-wrapper input')[1];
            inputFromElement.setValue('400');
            nullElement.click();
            // get values
            const filteredNullTd = $('td=null');
            const tdNullText = filteredNullTd.getText();

            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            // assert
            assert.equal(tdNullText, 'null');
            assert.equal(infoText, showOneInfo);
        });

        it('null exclude - two match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const nullElement = $$('.yadcf-null-wrapper input')[1];
            const excludeElement = $('#yadcf-filter-wrapper--example-1 input');
            excludeElement.click();
            inputFromElement.setValue('400');
            nullElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd4 = $('td=4');
            const td4Text = filteredTd4.getText();
            const filteredTd0 = $('td=0');
            const td0Text = filteredTd0.getText();
            // assert
            assert.equal(td4Text, '4');
            assert.equal(td0Text, '0');
            assert.equal(infoText, showTwoInfo);
        });

        it('clear - all match', () => {
            // arrange
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            const nullElement = $$('.yadcf-null-wrapper input')[1];
            const excludeElement = $('#yadcf-filter-wrapper--example-1 input');
            const clearElement = $('#yadcf-filter-wrapper--example-1 button');
            inputFromElement.setValue('-1');
            inputToElement.setValue('5');
            nullElement.click();
            excludeElement.click();
            // act
            clearElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const nullChecked = nullElement.getProperty('checked');
            const excludeChecked = excludeElement.getProperty('checked');
            const inputFromText = inputFromElement.getValue();
            const inputToText = inputToElement.getValue();
            // asset
            assert.equal(nullChecked, false);
            assert.equal(excludeChecked, false);
            assert.equal(inputToText, '');
            assert.equal(infoText, showAllInfo);
        });
    });

    describe('select filter', () => {

        it('select - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-2');
            inputElement.selectByVisibleText('master');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=master');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, 'master');
            assert.equal(infoText, showOneInfo);
        });

        it('select  null - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-2');
            inputElement.selectByVisibleText('master');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=null');
            const tdText = filteredTd.getText();
            // assert
            assert.equal(tdText, 'null');
            assert.equal(infoText, showOneInfo);
        });

        it('select exclude - two match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-2');
            const excludeElement = $('#yadcf-filter-wrapper--example-2 input');
            inputElement.selectByVisibleText('null');
            excludeElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const filteredTd = $('td=master');
            const tdText = filteredTd.getText();
            const filteredTd2 = $('td=noob');
            const td2Text = filteredTd2.getText();
            // assert
            assert.equal(td2Text, 'noob');
            assert.equal(tdText, 'master');
            assert.equal(infoText, showTwoInfo);
        });

        it('clear - all match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-2');
            const excludeElement = $('#yadcf-filter-wrapper--example-2 input');
            const clearElement = $('#yadcf-filter-wrapper--example-2 button');
            inputElement.selectByVisibleText('null');
            excludeElement.click();
            // act
            clearElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const excludeChecked = excludeElement.getProperty('checked');
            const inputText = inputElement.getValue();
            // asset
            assert.equal(excludeChecked, false);
            assert.equal(inputText, '-1');
            assert.equal(infoText, showAllInfo);
        });
    });

    describe('reset all filters', () => {

        it('reset all button - all match', () => {
            // arrange
            const inputTextElement = $('#yadcf-filter--example-0');
            const nullElement = $('.yadcf-null-wrapper input');
            const excludeElement = $('#yadcf-filter-wrapper--example-0 input');
            const regexElement = $('.yadcf-regex-wrapper input');
            const inputFromElement = $('#yadcf-filter--example-from-1');
            const inputToElement = $('#yadcf-filter--example-to-1');
            const null2Element = $$('.yadcf-null-wrapper input')[1];
            const exclude2Element = $('#yadcf-filter-wrapper--example-1 input');
            const inputSelectElement = $('#yadcf-filter--example-2');
            const exclude3Element = $('#yadcf-filter-wrapper--example-2 input');
            const resetAllElement = $('#resetAll');
            inputTextElement.setValue('lion');
            nullElement.click();
            excludeElement.click();
            regexElement.click();
            inputFromElement.setValue('-1');
            inputToElement.setValue('5');
            null2Element.click();
            exclude2Element.click();
            inputSelectElement.selectByVisibleText('null');
            exclude3Element.click();
            // act
            resetAllElement.click();
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText();
            const nullChecked = nullElement.getProperty('checked');
            const regexChecked = regexElement.getProperty('checked');
            const excludeChecked = excludeElement.getProperty('checked');
            const inputText = inputTextElement.getValue();
            const null2Checked = null2Element.getProperty('checked');
            const exclude2Checked = exclude2Element.getProperty('checked');
            const inputFromText = inputFromElement.getValue();
            const inputToText = inputToElement.getValue();
            const exclude3Checked = exclude3Element.getProperty('checked');
            const inputSelectText = inputSelectElement.getValue();
            // asset
            assert.equal(nullChecked, false);
            assert.equal(regexChecked, false);
            assert.equal(excludeChecked, false);
            assert.equal(null2Checked, false);
            assert.equal(exclude2Checked, false);
            assert.equal(exclude3Checked, false);
            assert.equal(inputText, '');
            assert.equal(inputFromText, '');
            assert.equal(inputToText, '');
            assert.equal(inputSelectText, '-1');
            assert.equal(infoText, showAllInfo);
        });
    });

});
