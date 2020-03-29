// test passed
import {GitHubUser} from "./model";



const assert = require('assert');

describe('GitHubUser', () => {

        it('should create an object with img and bio props',  () =>  {

            //given
            const [givenUrl,givenBio] = ['url','bio'];  //destructioning

            const input  = {
                avatar_url: givenUrl,
                bio: givenBio
            }

            //when
            const result = new GitHubUser(input);

            // then
            assert.equal(result.img,givenUrl)
            assert.equal(result.bio,givenBio)
        });

    it('should return bio from toString implementation',  () =>  {

        //given
        const [givenUrl,givenBio] = ['url','bio'];  //destructioning

        const input  = {
            avatar_url: givenUrl,
            bio: givenBio
        }

        //when
        const result = new GitHubUser(input);

        // then
        assert.equal(`${result}`,givenBio)

    });

})
