// test failed
import {map} from "./map";



const assert = require('assert');

describe('map', () => {

        it('should convert an input to an object with different keys',  () =>  {

            //given
            let givenUrl = 'url';
            let givenBio = 'bio';
            const input  = {
                avatar_url: givenUrl,
                bio: givenBio
            }

            //when
            const result = map(input);

            // then
            assert.deepEqual(result,{img:givenUrl,bio: givenBio})
        });

})
