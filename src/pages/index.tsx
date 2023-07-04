import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link';
import { Seo } from '@/components/seo';

const LandingPage = () => {
  return (
    <>
      <Seo title="Jobs App" />
      <Button>Button</Button>
      <br />
      <InputField />
      <br />
      <Link href="/">asd</Link>
    </>
  );
};
export default LandingPage;