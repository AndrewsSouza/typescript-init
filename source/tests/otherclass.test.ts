
import { OtherClass } from '../core/otherclass';


describe('other class', () => {

    it('should be creatable', () => {
        const oc: OtherClass = new OtherClass();
        expect(oc !== undefined).toEqual(true);
    });
});
