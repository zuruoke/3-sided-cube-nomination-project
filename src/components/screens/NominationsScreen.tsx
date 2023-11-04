import SubmissionsTile from "../nomination/SubmissionTile";

const NominationsScreen: React.FC = () => {
  const nominations = [
    { nominee: 'David Jones', dateSubmitted: '21/10/23', reason: 'Lorem ipsum dolor sit amet, consectet desu...', processStatus: 'Fair' },
    { nominee: 'Elliot Coleman', dateSubmitted: '12/10/23', reason: 'Lorem ipsum dolor sit amet, consectet desu...', processStatus: 'Fair' },
    { nominee: 'Lucia Pauline J...', dateSubmitted: '11/03/23', reason: 'Lorem ipsum dolor sit amet, consectet desu...', processStatus: 'Fair' },
    // Add more nominations as needed
  ];

  return (
    <div className="bg-green-100 min-h-screen px-10 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl mb-10 font-bold">YOUR NOMINATIONS</h1>

        {/* Headers */}
        <div className="flex justify-between mb-4 text-xl font-semibold">
          <p className="w-1/4">NOMINEE</p>
          <p className="w-1/4">DATE SUBMITTED</p>
          <p className="w-1/4">REASON</p>
          <p className="w-1/4">PROCESS</p>
        </div>

        {/* List of nominations */}
        {nominations.map((nomination, index) => (
          <SubmissionsTile
            key={index}
            nominee={nomination.nominee}
            dateSubmitted={nomination.dateSubmitted}
            reason={nomination.reason}
            processStatus={nomination.processStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default NominationsScreen;
