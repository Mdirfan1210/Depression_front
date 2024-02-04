import React from 'react'
import './Upload.css'
export default function Upload() {
  return (
    <div className='Upload' id='Upload'>
        <p className='Content'>Upload</p>
        <form>
            <table>
                <tr>
                    <td>Do You Want to Know that you have depressed or not?</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Upload the audio file.</td>
                    <td></td>
                </tr>
                <tr>
                    <td><input className='Filepath' type='file'></input></td>
                </tr>
                <tr>
                    {/* <td ><button>Submit</button>
                    <button>Reset</button></td> */}
                    <td><input className='button1' type='submit' value='Check for Depression'></input>
                    <input className='button1' type='Reset' value='Reset'></input></td>
                </tr>
            </table>
        </form>
    </div>
  )
}
