// test passed
import {map} from "./map";



const assert = require('assert');

describe('map', () => {

        it('should convert an input to an object with different keys',  () =>  {

            //given
            const [givenUrl,givenBio] = ['url','bio'];  //destructioning

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
