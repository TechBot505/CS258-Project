import { IconFolder, IconFile, IconFolderOpen } from './Icons'

export const FilesViewer = ({ files, onBack, onOpen , onClickFile}) => (
  <table class="table overflow-y-scroll text-black">
    <tbody>
      <tr className="clickable" onClick={onBack}>
        <td className="icon-row">
          <IconFolderOpen />
        </td>
        <td>...</td>
        <td></td>
      </tr>

      {files.map(({ name, directory, size }) => {
        return (
          <tr className="clickable" onClick={() => {
            directory && onOpen(name)
            onClickFile(name)
            }}>
            <td className="icon-row">
              {directory ? <IconFolder /> : <IconFile />}
            </td>
            <td>{name}</td>
            <td>
              <span className="float-end">{size}</span>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
