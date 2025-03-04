/**
 *
 * @param {{className: string}}
 * @returns
 */
export default function checkmark({ className }: any): any {
  return (
    <svg
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="10"
    >
      <path
        fillRule="nonzero"
        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
      />
    </svg>
  );
}
