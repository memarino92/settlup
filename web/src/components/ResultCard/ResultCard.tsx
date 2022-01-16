const ResultCard = ({ totalOne, totalTwo }) => {
  return (
    <div>
      <h2>SettlUp!</h2>
      {totalOne < totalTwo ? (
        <>
          <p>
            1 &rarr; 2
            <br />${(totalTwo - totalOne) / 2}
          </p>
        </>
      ) : (
        <>
          <p>
            1 &larr; 2
            <br />${(totalOne - totalTwo) / 2}
          </p>
        </>
      )}
    </div>
  )
}

export default ResultCard
