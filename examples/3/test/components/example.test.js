import {create} from "react-test-renderer";
import Component from "components/example";

describe("Example", () => {
  it("renders component", () => {
    const component = create(<Component />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
