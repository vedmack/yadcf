const assert = require('assert');

describe('yadcf test', () => {

    beforeEach(() => {
        browser.url('file:///C:/Users/sk040188/Desktop/yadcf/src/test/specs/test.html');
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
            const infoText = infoElement.getText(false);
            // assert
            assert.equal(infoText, showNoneInfo);
        });

        it('input - one match', () => {
            // arrange
            const inputElement = $('#yadcf-filter--example-0');
            inputElement.setValue('tiger');
            // get values
            const infoElement = $('#example_info');
            const infoText = infoElement.getText(false);
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
            const infoText = infoElement.getText(false);
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

});
