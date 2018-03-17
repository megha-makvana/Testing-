import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//USe describe to group similar tests
describe('App' , () => {
  // //Use 'it' to test single attribute of a target
  // it('show the correct text', () => {
  //   const component = renderComponent(App);

  //   //Use 'expect' to make an assertion about the target component
  //   expect(component).to.contain('React simple starter')
  // })
  let component;
  beforeEach(()=> {
    component= renderComponent(App)
  })
  it('shows a comment box',() => {
    expect(component.find('.comment-box')).to .exist;
  });



});
