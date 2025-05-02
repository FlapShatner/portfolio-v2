import React from 'react';

function PrivacyPolicy() {
  const contactInfo = 'jrobertswebdev@gmail.com';

  return (
    <div className="bg-yoink-bg text-white h-full pb-12 border-l-[32px] border-yoink-green ">
      <h2 className="text-2xl font-bold mb-4 bg-yoink-green text-yoink-dark p-4 font-silkscreen">
        Privacy Policy for InstaYoink
      </h2>
      <div className="px-4 max-w-2xl font-secondary ">
        <p className="text-sm my-2">
          <strong>Last Updated:</strong> May 1, 2025
        </p>

        <p className="my-4">
          {` InstaYoink ("the Extension") is committed to protecting your privacy.
        This policy outlines our practices regarding data handling.`}
        </p>
        <div className="my-4">
          <h3 className="text-lg font-bold">Data Collection and Usage:</h3>
          <ul className="list-disc list-outside ml-4">
            <li>
              <strong>No Personal Data Collection:</strong> The Extension does
              not collect, store, transmit, or share any personally identifiable
              information (PII) or any other user data.
            </li>
            <li>
              <strong>Local Processing:</strong> All functionality of the
              Extension, including identifying downloadable media and initiating
              downloads, occurs entirely within your local browser. No data is
              sent to external servers controlled by the developers of
              InstaYoink or any third parties.
            </li>
            <li>
              <strong>No Tracking:</strong> The Extension does not track your
              browsing activity or usage patterns.
            </li>
          </ul>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold">Data Storage:</h3>
          <p>
            {` Any data required for the Extension's operation (such as temporary
        references to media URLs) is stored locally within your browser's
        storage mechanisms and is not accessible externally. This data persists
        only as needed for the Extension's core function and is not aggregated
        or analyzed.`}
          </p>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold">Third-Party Services:</h3>
          <p>
            The Extension does not utilize any third-party services for data
            collection, analytics, or advertising.
          </p>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold">Changes to This Policy:</h3>
          <p>
            {` We may update this Privacy Policy from time to time. Any changes will be
        reflected in the "Last Updated" date above. We encourage you to review
        this policy periodically.`}
          </p>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold">Contact Us:</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at <span className="text-yoink-green">{contactInfo}</span>.
          </p>
        </div>
        <p>
          By installing and using InstaYoink, you agree to the terms outlined in
          this Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
