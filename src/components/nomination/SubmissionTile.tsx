interface SubmissionsTileInterface{
    nominee: string;
    dateSubmitted: string;
    reason: string;
    processStatus: string;
}



const SubmissionsTile: React.FC<SubmissionsTileInterface>  = ({ nominee, dateSubmitted, reason, processStatus }) => {
    return (
      <div className="flex justify-between items-center border-b-2 py-4">
        <div className="w-1/4">
          <p className="text-lg truncate">{nominee}</p>
        </div>
        <div className="w-1/4">
          <p className="text-lg">{dateSubmitted}</p>
        </div>
        <div className="w-1/4">
          <p className="text-lg truncate">{reason}</p>
        </div>
        <div className="w-1/4 flex justify-between items-center">
          <p className="text-lg">{processStatus}</p>
          <span className="material-icons">event</span>
          <span className="material-icons">edit</span>
        </div>
      </div>
    );
  };
  
  export default SubmissionsTile